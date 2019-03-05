import project from './project';

describe('projects reducer', () => {
  it('should return an object', () => {
    expect(project()).toEqual(expect.any(Object));
  });
});

