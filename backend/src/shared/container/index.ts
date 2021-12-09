import { container } from 'tsyringe';
import { AnswersRepository } from '../../repositories/AnswersRepository';
import { PlayersRepository } from '../../repositories/PlayersRepository';
import { QuestionsRepository } from '../../repositories/QuestionsRepository';

container.registerSingleton<PlayersRepository>('PlayersRepository', PlayersRepository);

container.registerSingleton<QuestionsRepository>('QuestionsRepository', QuestionsRepository);

container.registerSingleton<AnswersRepository>('AnswersRepository', AnswersRepository);