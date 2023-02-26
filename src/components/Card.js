import React from 'react'
import { useDrag } from 'react-dnd';


function Card({ card, setItems, items }) {

    // Monitoring "Drag" action.
    const [{ isDragging, }, drag] = useDrag(() => ({
        type: "card",
        item: { id: card.key },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            item: monitor.getItem(),
        }),
    }),)

    // Delete card
    function deleteCard() {
        const newItems = items.filter(item => item.key !== card.key)
        setItems([...newItems])
        console.log("deleted")
    }

    return (
        <div ref={drag} style={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            padding: "0 15px",
            minHeight: '50px',
            background: "white",
            width: "90%",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius: "10px",
            transform: isDragging ? "scale(1.15)" : "scale(1)",
        }} >
            <h4 style={{ color: '#000', fontWeight: "400" }} >{card.title} </h4>
            <button onClick={deleteCard}
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "20px"
                }}>❌</button>
        </div>
    )
}

export default Card

