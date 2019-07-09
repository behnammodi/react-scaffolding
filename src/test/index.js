import renderer from 'react-test-renderer';

export const snapshot = stories =>
  stories.forEach(story =>
    it(`Renders correctly ${story.name}`, () => {
      const tree = renderer.create(story.render()).toJSON();
      expect(tree).toMatchSnapshot();
    })
  );
