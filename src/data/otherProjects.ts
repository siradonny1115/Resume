import { OtherProject } from '../types/resume';
import { crmGroupTemplateProject } from './projects/other/crm-group-template';
import { pgIntegrationProject } from './projects/other/pg-integration';
import { e2eTestProject } from './projects/other/e2e-test';
import { pgQaAutomationProject } from './projects/other/pg-qa-automation';
import { orderManagementProject } from './projects/other/order-management';
import { securityKeypadProject } from './projects/other/security-keypad';
import { cardPaymentProject } from './projects/other/card-payment';

export const otherProjects: OtherProject[] = [
  crmGroupTemplateProject, // 2025.07 ~ 2025.11
  pgIntegrationProject, // 2025.02 ~ 2025.04
  e2eTestProject, // 2024.09 ~ 2024.10
  pgQaAutomationProject, // 2024.09 ~ 2024.10
  orderManagementProject, // 2023.03 ~ 2023.10
  securityKeypadProject, // 2022.11 ~ 2022.12
  cardPaymentProject, // 2022.09 ~ 2023.01
];
