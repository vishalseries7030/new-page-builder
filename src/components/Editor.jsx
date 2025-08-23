// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// export default function Editor() {
//   const [value, setValue] = useState("");

//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, false] }],
//       ["bold", "italic", "underline", "strike"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["link", "image"],
//       ["clean"],
//     ],
//   };

//   return (
//     <div style={{ width: "100%", maxWidth: "1000px", margin: "20px auto" }}>
//       <h2 style={{ color: "#fff" }}>📝 Rich Text Editor</h2>
//       <ReactQuill
//         theme="snow"
//         value={value}
//         onChange={setValue}
//         modules={modules}
//         placeholder="Start writing here..."
//         style={{ height: "200px", marginBottom: "20px", background: "#fff" }}
//       />
//       <h3 style={{ color: "#fff" }}>📄 Preview:</h3>
//       <div
//         style={{
//           minHeight: "100px",
//           padding: "10px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//           background: "#fff",
//           color: "#000",
//         }}
//         dangerouslySetInnerHTML={{ __html: value }}
//       />
//     </div>
//   );
// }
