import "./style.css"

const FullScreenLoader = (appIsLoading: boolean) => {
    if(!appIsLoading) return null;

    return(
        <div className="loader-overlay">
            
        </div>
    )
}

export default FullScreenLoader