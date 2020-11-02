import React from 'react';

import { Button, Input, Textarea } from 'components/Form';

function App() {
    return (
        <div>
            <Button color="clouds" bgColor="belizeHole" icon="coffee">Click me</Button>
            <Input
                color="concrete"
                bgColor="alizarin"
                borderSize="1"
                borderRadius="20"
                borderColor="emerald"
            />
            <Textarea
                color="clouds"
                bgColor="nephritis"
                borderSize="5"
                borderRadius="20"
                borderColor="alizarin"
            />
        </div>
    );
}

export default App;
