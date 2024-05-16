const Input = (props) => {

    const nameForm = props.type


    return (
        <>
            <div className="inputs">
                <input type={props.type} placeholder={nameForm.split('').shift().toUpperCase() + nameForm.split('').slice(1).join('')} />
                <ion-icon name={props.icon}></ion-icon>
            </div>

        </>
    )
}

export default Input