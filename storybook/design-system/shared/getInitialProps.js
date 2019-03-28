import getCategoryUrl from 'shared/getCategoryUrl';

export default (componentPath, baseType = 'components') => async ({
  req: { url }
}) => {
  const basePathComponent = `pages/${baseType}`;
  const basePath = `${basePathComponent}/${componentPath}`;
  const type = await getCategoryUrl(url);
  const title = await require(`../${basePath}/markdown/title.md`);
  const content = await require(`../${basePath}/markdown/content.md`);
  const importcss = await require(`../${basePath}/markdown/importcss.md`);
  const usage = await require(`../${basePath}/markdown/usage.md`);
  const typography = await require(`../${basePath}/markdown/typography.md`);
  const structure = await require(`../${basePath}/markdown/structure.md`);
  const meta = await require(`../${basePath}/constants/meta.json`);
  const headerLinks = await require(`../${basePath}/constants/headerlinks.json`);
  const colors = await require(`../${basePath}/constants/colors.json`);
  return {
    title,
    content,
    meta,
    importcss,
    usage,
    typography,
    structure,
    headerLinks,
    colors,
    type
  };
};
