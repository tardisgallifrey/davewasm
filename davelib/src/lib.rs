// lib.rs
use wasm_bindgen::prelude::*; //needed for wasm

//needed for wasm
#[wasm_bindgen]
//Only public functions can be exported through WASM
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

//This is a test function
#[test]
fn add_test() {
    assert_eq!(1 + 1, add(1, 1));
}
