import"./Avatar.css"

const Avatar = ({ nome }) => {
    const iniciais = nome.split(" ").map(item => item[0]).join("").toUpperCase();
    return <div className="avatar_root">{iniciais}</div>;
}

export default Avatar;