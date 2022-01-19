export default function BannerCard(props) {
    const { image } = props
    return (
        <div className="drop-shadow-md bg-white rounded">
            <img src={`/assets/images/${image}`} className="mx-auto rounded"/>
        </div>
    )
}