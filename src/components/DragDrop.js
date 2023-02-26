import React from 'react'
import Card from './Card';
import { useDrop } from 'react-dnd';

function DragDrop({ items, setItems, status }) {

    // Monitoring "Drop" action.
    const [{ isOver}, drop] = useDrop(() => ({
        accept: "card",
        drop: (card) => {console.log('moving item:', card.id); addCardToColumn(card.id)},
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        
    }));

    // Move card from one collumn to another.
    function addCardToColumn(id) {        
        const newItems = items
        const element = newItems.find(item => item.key === id)
        element.status = status
        setItems([...newItems])        
    }

    return (
        <div className="Items"  ref={drop} 
        style={{minHeight: "70vh", 
        display:"flex",
        flexDirection: "column", 
        justifyContent: "flex-start", 
        alignItems: "center",
        gap: "15px" , 
        
        border: isOver ? "5px solid transparent" : "0px", }}>
            { items.filter(item => item.status === status).map((item) => {
                return <Card card={item} key={item.key} setItems={setItems} items={items} />;
            })}
        </div>
    )
}

export default DragDrop

