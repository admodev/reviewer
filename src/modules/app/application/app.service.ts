import { Injectable } from '@nestjs/common';
import apiSelector from 'src/shared/api-selector';

@Injectable()
export class AppService {
  getHello(): string {
    // Testing api selection...
    const vcs = apiSelector('https://github.com/admodev/ccg');

    return vcs.length > 0 ? vcs : 'no se selecciono api. Error!';
  }
}
