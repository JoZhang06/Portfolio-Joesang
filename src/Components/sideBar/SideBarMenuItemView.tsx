import { SideBarMenuItem } from "../sideBar/Types/types"
import { classNames } from "../../assets/Util/classes"
import "./SideBarMenuItemView.scss"

interface SideBarMenuItemViewProps {
    item: SideBarMenuItem,
    isOpen: boolean;
}

export default function SideBarMenuItemView({
    item,
    isOpen,
}: SideBarMenuItemViewProps) {
    return (
        <div className="SideBarMenuItemView">
            <a href={item.url}>
                <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
                    <div className="icon">
                        <item.icon size="33" />
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </a>
            {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
        </div>
    )
}