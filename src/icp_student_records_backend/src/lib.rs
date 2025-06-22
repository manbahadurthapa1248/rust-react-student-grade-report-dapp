use candid::{CandidType, Deserialize};
use ic_cdk_macros::{query, update};
use std::cell::RefCell;

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Student {
    pub name: String,
    pub total_marks: u32,
    pub num_subjects: u32,
    pub average: f32,
    pub grade: String,
}

thread_local! {
    static STUDENTS: RefCell<Vec<Student>> = RefCell::new(vec![]);
}

#[update]
pub fn add_student(name: String, marks: Vec<u32>) {
    let total_marks: u32 = marks.iter().sum();
    let num_subjects = marks.len() as u32;
    let average = if num_subjects > 0 {
        total_marks as f32 / num_subjects as f32
    } else {
        0.0
    };
    let grade = assign_grade(average);

    let student = Student {
        name,
        total_marks,
        num_subjects,
        average,
        grade,
    };

    STUDENTS.with(|s| s.borrow_mut().push(student));
}

#[query]
pub fn get_students() -> Vec<Student> {
    STUDENTS.with(|s| s.borrow().clone())
}

fn assign_grade(avg: f32) -> String {
    if avg >= 90.0 {
        "A".to_string()
    } else if avg >= 75.0 {
        "B".to_string()
    } else if avg >= 60.0 {
        "C".to_string()
    } else {
        "D".to_string()
    }
}
