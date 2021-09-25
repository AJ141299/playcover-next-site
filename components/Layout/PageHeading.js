const PageHeading = ({ text, overwriteStyles, replaceBottomPadding }) => {
  let baseStyle = "flex justify-center text-gray-700 dark:text-menu-pink transition duration-200 pb-24 pt-[10rem]";


  if (replaceBottomPadding) {
    baseStyle = baseStyle.replace("pb-24", replaceBottomPadding);
  }

  let styles;
  if (overwriteStyles && typeof overwriteStyles == "string") {
    styles = `${baseStyle} ${overwriteStyles}`;
  } else {
    styles = `${baseStyle} text-4xl lg:text-5xl font-semibold`;
  }

  return (<div className={ styles }>
    <h1 className="">{ text }</h1>
  </div>);
};

export default PageHeading;