export default function Button(props){
    return (
        <>
            <section className="component-btn-section">
                <a href="#" className="component-btn">{props.btnTxt}</a>
            </section>
        </>
    )
}