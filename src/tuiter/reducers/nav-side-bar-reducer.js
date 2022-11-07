const NavigationSidebarReducer = (state, action) => {
    switch (action.type) {
        case "set-parameter":
            return action.changeState;
        default:
            return "home";
    }
};
export default NavigationSidebarReducer;