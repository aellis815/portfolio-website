interface SectionBufferProps {
    id: string;
}


const SectionBuffer: React.FC<SectionBufferProps> = ({id}) => {
    return (
        <div className="flex mt-24" id={id}></div>
    )
}

export default SectionBuffer;