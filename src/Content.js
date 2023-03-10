import {memo} from "react";

function Content({onIncrease}) {
    console.log('hello')
    return (
        <div>
            hello AE
            <button onClick={onIncrease}>click me</button>
        </div>
    )
}

export default memo(Content);
