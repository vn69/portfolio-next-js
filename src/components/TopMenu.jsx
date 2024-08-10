export default function TopMenu({addMoreItem, changeType, isEditing}) {
    return (
        <div className="relative h-0">
            <div className={`absolute -top-6 right-0 ${isEditing ? '' : 'hidden'}`}>
            {
                changeType && (
                    <button className="bg-slate-700 px-2 ml-2 opacity-40 hover:opacity-100" onClick={changeType} >Change Type</button>
                )
            }
                <button className="bg-slate-700 px-2 ml-2 opacity-40 hover:opacity-100" onClick={addMoreItem} >Add +</button>
            </div>
        </div>
    );
}
