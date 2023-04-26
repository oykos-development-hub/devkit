export default BreakView;
declare function BreakView(props: any): JSX.Element;
declare namespace BreakView {
    namespace propTypes {
        const breakLabel: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        const breakAriaLabel: PropTypes.Requireable<string>;
        const breakClassName: PropTypes.Requireable<string>;
        const breakLinkClassName: PropTypes.Requireable<string>;
        const breakHandler: PropTypes.Validator<(...args: any[]) => any>;
        const getEventListener: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
