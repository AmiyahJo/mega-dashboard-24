import { useState } from 'react'
import '/home/codio/workspace/mega-dash/src/components/to-do.css'

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
        <div className="todo-list">
            <h2>To-do List</h2>
    <div className="input-group">
            <input
            value={text}
            onChange={e => setText(e.target.value)}
            />
                <button onClick={addItem}>Add</button>
             </div>
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
             </div>
        </>
    );
};

export default List;