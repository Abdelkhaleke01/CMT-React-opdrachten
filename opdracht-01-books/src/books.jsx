const Books = ({title, desc, img}) => {
    return (
        <section className="Books-container">
            <img src={img} alt={title} />
            <p>{desc}</p>
            <h1>{title}</h1>
        </section>
     );
}
 
export default Books