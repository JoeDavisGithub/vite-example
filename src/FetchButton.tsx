interface FetchButtonProps {
    url: string;
    purpose: string;
}

function FetchButton(props: FetchButtonProps) {
    return(
        <button onClick={() => window.open(props.url)}>
            {props.purpose}
        </button>
        
    )
}

export default FetchButton