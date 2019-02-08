describe('describe', () => {
  it('it 1', () => {
    expect(1).toBe(1);
  });

  it('it 2', () => {
    expect(1).toBe(1);
  });
});

describe.only('describe only', () => {
  it.only('it only', () => {
    expect(1).toBe(1);
  });

  it('it', () => {
    expect(1).toBe(1);
  });
});
