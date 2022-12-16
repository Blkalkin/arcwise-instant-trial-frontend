import React, { useRef } from "react";
import {Button} from "@mantine/core";
import axios from "axios";
import {file_name} from "./SelectFile";
import Editor from "@monaco-editor/react";

export function SqlEditor() {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor:any) {
        editorRef.current = editor;
    }

    function handleUpload() {
        let file_name_truncated = file_name.substring(0, file_name.length - 4);
        // @ts-ignore
        const res =  axios.post('http://127.0.0.1:8000/query', {file_name: file_name_truncated, sql_string: editorRef.current.getValue()});
        console.log(res);
    }

    return (
        <>
            <Button onClick={handleUpload}>Submit Query</Button>
            <Editor
                height="100vh"
                width="50vw"
                defaultLanguage="sql"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
            />
        </>
    );
}
