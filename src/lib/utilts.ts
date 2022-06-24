export const enterPressed = (rawEvent: any, function_: () => void) => {
    const event = rawEvent as KeyboardEvent;

    if (event.key === "Enter") {
        function_();
    }
};
