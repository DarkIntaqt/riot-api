import { EndpointParser } from '../../EndpointParser';
import { RequestHandler } from '../../RequestHandler';
import { ChallengePlayerDataDTO } from '../../interfaces/challenges';
import { Response } from '../../interfaces/shared';

export class LOLChallenges {
  constructor(
    private readonly requestHandler: RequestHandler,
    private readonly endpointParser: EndpointParser
  ) {}

  /**
   * Get a list of a summoners challenge progress by puuid
   *
   * @param {string} region region
   * @param {string} puuid puuid
   * @returns {Promise<Response<ChallengePlayerDataDTO>>}
   */
  public async byPuuid(
    region: string,
    puuid: string
  ): Promise<Response<ChallengePlayerDataDTO>> {
    const host = this.endpointParser.region(region);
    const response = await this.requestHandler.request<ChallengePlayerDataDTO>(
      `${host}/lol/challenges/v1/player-data/${puuid}`
    );

    return response;
  }
}
