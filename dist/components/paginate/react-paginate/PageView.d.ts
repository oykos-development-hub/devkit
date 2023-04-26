export default PageView;
declare function PageView(props: any): JSX.Element;
declare namespace PageView {
    namespace propTypes {
        const pageSelectedHandler: PropTypes.Validator<(...args: any[]) => any>;
        const selected: PropTypes.Validator<boolean>;
        const pageClassName: PropTypes.Requireable<string>;
        const pageLinkClassName: PropTypes.Requireable<string>;
        const activeClassName: PropTypes.Requireable<string>;
        const activeLinkClassName: PropTypes.Requireable<string>;
        const extraAriaContext: PropTypes.Requireable<string>;
        const href: PropTypes.Requireable<string>;
        const ariaLabel: PropTypes.Requireable<string>;
        const page: PropTypes.Validator<number>;
        const getEventListener: PropTypes.Validator<(...args: any[]) => any>;
        const pageLabelBuilder: PropTypes.Validator<(...args: any[]) => any>;
        const rel: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
