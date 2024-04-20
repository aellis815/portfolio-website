interface SectionBufferProps {
    id: string;
}


const SectionBuffer: React.FC<SectionBufferProps> = ({id}) => {
    return (
        <div className="my-48 h-48 w-1 rounded-full sm:block bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent flex flex-col items-center justify-center" id={id}></div>
    )
}

export default SectionBuffer;