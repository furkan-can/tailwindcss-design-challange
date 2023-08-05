import CollectedContent from "../components/CollectedContent/CollectedContent"
import Ellipses from "../components/Ellipses/Ellipses"
import ToolTip from "../components/ToolTip/ToolTip"
import CollectedSection from "../prefabs/CollectedSection/CollectedSection"


const CollectedPage = () => {
    return (
        <CollectedSection >
            <ToolTip />
            <Ellipses />
            <CollectedContent />
        </CollectedSection>

    )
}

export default CollectedPage