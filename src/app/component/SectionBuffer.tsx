interface SectionBufferProps {
    id: string;
}


const SectionBuffer: React.FC<SectionBufferProps> = ({id}) => {
    return (
        <div className="flex mt-36" id={id}></div>
    )
}

export default SectionBuffer;