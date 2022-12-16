import {useState, useRef} from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import axios from "axios";


export let file_name = '';

export function SelectFile() {
    const [file, setFile] = useState<File | null>(null);
    const resetRef = useRef<() => void>(null);

    const clearFile = () => {
        setFile(null);
        resetRef.current?.();
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        if (file){formData.append('file', file)}
        const res = await axios.post('http://127.0.0.1:8000/uploadtest', formData);
        console.log(res);
        if (res.status === 200){
            alert("File uploaded successfully");
            if (file){file_name = file.name}
        }
    }

    return (
        <>
            <Group position="center">
                <FileButton resetRef={resetRef} onChange={setFile} accept="*/csv">
                    {(props) => <Button {...props}>Choose File</Button>}
                </FileButton>
                <Button onClick={handleSubmit}>Upload File</Button>
                <Button disabled={!file} color="red" onClick={clearFile}>Reset</Button>
            </Group>
            {file && (
                <Text size="sm" align="center" mt="sm">
                    Picked file: {file.name}
                </Text>
            )}
        </>
    );
}