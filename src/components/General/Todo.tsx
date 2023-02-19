import React from 'react'
import type TodoProps from '../../props/TodoProps';

const Todo = (props: TodoProps) => {
    props['text'] ??= 'This section has not been implemented yet.';
    props['issue'] ??= 52;

    return (
        <blockquote>
            <p>{props.text}</p>
            <p>
                Please, refer to issue 
                {' '}<a href={`https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes/issues/${props.issue}`}>
                    #{props.issue}
                </a>
                {' '}for more information.
            </p>
        </blockquote>
    );
};

export default Todo;