import { useState } from 'react'

function List() {
    const defaultItems = ['List1', 'List2', 'List3'];
    const [lists, setLists] = useState(defaultItems.map((list, index) =>
    ({
        id: index + 1, 
        text: list

    })));

    const [text, setText] = useState('');

    const addItem = () => {
        if (text.trim() === ' ') return;
            setLists([
                ...lists,
                {
                    id: lists.length + 1.,
                    text: text
                }
            ]);
            setText('');
    }
    const deleteList = (id) => {
        setLists(lists.filter(list => list.id !== id))
    }

    return(
        <>
        
            <h1>To-do List</h1>
    
            <input
            value={text}
            onChange={e => setText(e.target.value)}
            />
                <button onClick={addItem}>Add</button>
                <ul>
                    {lists.map((list) => (
                       <li key={list.id}>
                            {list.text}
                            <button onClick={() => deleteList(list.id)}>
                                Delete
                            </button>
                       </li> 
                    ))}
                </ul>
        </>
    );
};

export default List;