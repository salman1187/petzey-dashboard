import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AppointmentService } from './appointment.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),AppointmentService,
    [
      {useClass:AppointmentService}
    ]
  ]
};
