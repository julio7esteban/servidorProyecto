import { Pelicula } from './pelicula.entity';

describe('Pelicula', () => {
  it('should be defined', () => {
    expect(new Pelicula()).toBeDefined();
  });
});
