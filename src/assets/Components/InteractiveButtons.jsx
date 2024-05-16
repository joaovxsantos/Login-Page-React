const InteractiveButtons = () => {
    return (
        <>
            <div className="rememberButtons">
                <div className="checkEl">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <span>Forgot Your Password?</span>
            </div>
        </>
    )
}

export default InteractiveButtons