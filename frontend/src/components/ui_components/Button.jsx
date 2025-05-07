import { NavLink } from "react-router";

const Button = ({ title, to, state }) => {
  return (
    <NavLink
      to={to}
      state={state}
      className="group/button relative inline-flex overflow-hidden backdrop-blur-lg rounded-full btn btn-sm dark:btn-soft btn-primary active:shadow-inner shadow-neutral-800 transition-all duration-300 ease-in-out shadow-md dark:shadow-sm dark:shadow-primary dark:active:shadow-inner dark:active:shadow-neutral-800 border-0 dark:border-1 border-primary"
    >
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20" />
      </div>
      {title}
    </NavLink>
  );
};

export default Button;
