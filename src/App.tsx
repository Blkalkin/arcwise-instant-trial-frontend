import {Text, Stack, Group} from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import { SelectFile} from "./SelectFile"
import { SqlEditor} from "./SqlEditor"


export default function App() {
    return (
        <ThemeProvider>
            <Stack align="center" mt={50}>
                <Text size="xl" weight={500}>
                    Arcwise Instant Trial
                </Text>
                <SelectFile></SelectFile>
            </Stack>
            <Group mt={50}>
                <SqlEditor></SqlEditor>
            </Group>
        </ThemeProvider>
    );
}
