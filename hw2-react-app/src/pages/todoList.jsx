import React from 'react';
import { pendingTasks, completedTasks } from '../components/todolist-components/todoList-data.js';
import Card from '../components/todolist-components/card.jsx';
import Search from '../components/tools/search.jsx';
import Button from '../components/tools/button.jsx';

export default function TodoList() {
    return (
        <div>
            <Search placeholder="Search tasks..." onChange={(e) => console.log(e.target.value)} />
            <Button label="Add Task" onClick={() => console.log('Add Task clicked')} />
            <Card itemList={pendingTasks} buttonList={['Complete', 'Delete','Edit']} />
            <Card itemList={completedTasks} buttonList={['Switch', 'Delete','Edit']} />
        </div>
    );
}


