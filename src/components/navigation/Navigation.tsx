import { DesktopNavigation } from "./desktopnavigation/DesktopNavigation"
import {Topbar} from './topbar/Topbar'

export const Navigation = () => {
    return (
        <DesktopNavigation>
            <Topbar />
        </DesktopNavigation>
    )
}