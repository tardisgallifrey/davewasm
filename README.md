# The Dave Rust/React/Wasm Combo

Based on [tkat0's work](https://tkat0.github.io/posts/how-to-create-a-react-app-with-rust-and-wasm/#create-rust-library-for-wasm)


1. Create a basic React App; any form you wish.  Mine is very minimal.

2. Create a new Rust library with cargo as a subfolder of your React App.
    ```cargo new davelib --lib```
    davelib is name of folder

3. Run ```cargo test``` at top of lib tree to see if your function works. Bonus: It also compiles your Rust file.

4. Add lib and dependency tags with crate-type for lib and wasm library, respectively.  See ```Cargo.toml``` for details.

5. Properly include wasm-bindgen (from wasm library dependency) and wrap function in wasm-bindgen tag see ```lib.rs``` for details.

6. Install wasm-pack with ```cargo install wasm-pack```

7.  Add the following line to react app package.json:
    ```"build:wasm": "cd wasm-lib && wasm-pack build --target web --out-dir pkg",```
    Note: If you use a different folder name for the Rust lib, change wasm-lib.
    

8. Now, you can build the wasm file with ```npm run build:wasm```
    Note: run this from root of your React app.

9. From the same folder location, you can now add the wasm with NPM:
    ```npm install ./wasm-lib/pkg```
    Note: Again, wasm-lib is name of Rust lib folder.  Use the name in this template.

10. See ```index.js``` for the code needed to use Rust function.

That should work.

## If cloning into this template

1. Do ```npm install``` from root of app.

2. Do ```cargo test``` from root of Rust lib.

2a. Run ```cargo install wasm-pack``` from root of Rust Lib.

3. Do ```npm run build:wasm``` from root of React app.

4. Do ```npm install ./davelib/pkg``` from root of React app.

Everything should function.

### NOTE: Remember that if you change folder or file names, it will affect the commands given to compile or build this template.
