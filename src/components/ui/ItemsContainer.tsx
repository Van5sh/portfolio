interface ItemsContainerProps {
    title?: string;
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ title }) => {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#162A39] shadow-md">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-orange-500 text-sm font-medium">
        {title}
      </span>
        </div>
    );
};

export default ItemsContainer;
