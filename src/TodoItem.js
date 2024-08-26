import './TodoItem.css';

function TodoItem({text, completed}) {
    return (
        <li className='TodoItem'>
        <span className={`Icon Icon-check ${completed === true && "Icon-check--active"}`}>V</span>
        <p className={`TodoItem-p ${completed === true && "TodoItem-p--completed"}`}>{text}</p>
        <span className='Icon Icon-delete'>x</span>
        </li>
    );
}

export { 
    TodoItem 
};