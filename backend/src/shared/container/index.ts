import { container } from 'tsyringe';
import { PlayersRepository } from '../../repositories/PlayersRepository';

container.registerSingleton<PlayersRepository>('PlayersRepository', PlayersRepository);