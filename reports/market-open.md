# 2026-06-18 장시작 Thesis 리포트

목적: 장 시작 시점에 보유종목과 관심종목의 Thesis 상태, 밤사이 변화, 오늘의 우선 액션을 빠르게 결정한다.

> 생성 시각은 2026-06-18 18:03 KST입니다. 실제 09:00 슬롯을 현재 시점 기준으로 소급 생성했으며, 판단 기준은 2026-06-17 미국장 마감과 2026-06-18 미국 프리마켓/아시아 오전 확인 기사입니다.
>
> Robin Thesis OS v5.0 판단 순서: `Money Flow -> Thesis -> Stock -> Timing`

## 1. Overnight Changes

### Money Flow

| 테마 | 밤사이 자금 흐름 | 근거 | Robin 해석 |
|---|---|---|---|
| AI 네트워킹 | 유지 | Credo는 FY2026 Q4 매출 4.37억달러, 다음 분기 가이던스 4.70억달러를 제시했고, 시장은 마진 둔화는 반영했지만 매출 강도는 인정했다. | 돈은 여전히 AI 병목에 남아 있다. 다만 금리 충격 구간이라 추격은 금지다. |
| AI 반도체 공급망 | 유지 | TSMC는 AI 수요 부족이 오래 지속될 것이라고 밝혔고 CoWoS 계열 패키징 우위도 유지 중이다. | TSM은 여전히 가장 직접적인 공급망 표현이다. |
| 전력/그리드 | 유지~강화 | 데이터센터 전력 수요와 지역 전력 병목은 계속 확대되고 있다. | ETN, NVT 류 전력 인프라 Thesis는 여전히 상위다. |
| 우주 인프라 | 선택적 유입 | RKLB는 2026-06-22 Nasdaq-100 편입이 예정돼 있고, 최근 backlog와 국방/발사 계약 강도도 좋다. | 우주 전체가 아니라 대표주 중심 자금이다. RKLB 우위, PL·SATL 열위다. |
| 금리 민감 구조물 | 유출 | 2026-06-17 Fed 이후 10년물은 4.469%, 달러는 강세를 유지했다. | AGNC, CONY, DXYZ, XOVR은 Thesis보다 구조와 자금조달 환경이 먼저 문제다. |

### Thesis

| 구분 | 핵심 변화 | Thesis 판정 |
|---|---|---|
| 강화 | RKLB 편입 수급, CRDO 실적 강도, 전력/그리드 병목 지속 | 강화 유지 |
| 유지 | TSM, ETN, PLTR, GOOGL, 주요 지수 ETF | 유지 |
| 경고 | NVTS, NVDA, AVGO, RMBS는 사업은 괜찮지만 금리와 멀티플 부담이 더 커졌다 | `thesis OK, timing wait` |
| 약화 | PL, SATL, AGNC, CONY, DXYZ, XOVR, RXT는 수급 또는 구조 리스크가 더 크다 | 약화 유지 |

### Stock

| Thesis 표현 수단 | 우선순위 | 이유 |
|---|---|---|
| CRDO / TSM / ETN / RKLB | 상 | AI 네트워킹, 반도체 병목, 전력 병목, 우주 대표성에 직접 노출된다. |
| Harmony Drive / Yaskawa | 중상 | 로봇 자동화 자금 흐름은 유지되지만 새 수주/양산 확인이 더 필요하다. |
| NVTS / NVDA / AVGO / RMBS | 중 | Thesis는 살아 있으나 지금은 종목보다 Timing 검증이 더 중요하다. |
| AGNC / CONY / DXYZ / XOVR | 하 | 금리, 구조, NAV/프리미엄 문제가 먼저다. |

### Timing

| 구분 | 해석 | 액션 |
|---|---|---|
| 20일선 위 또는 지지형 | 보유 우위 | Hold |
| 20일선 아래지만 Thesis 유효 | 타이밍 대기 | `thesis OK, timing wait` |
| 20일선 아래 + 구조 리스크 동반 | 경고 강화 | Trim/Sell 검토 |

## 2. Portfolio Thesis Dashboard

| 종목 | 상태(강화/유지/주의/약화/제외) | Red Alert | 20일선 | Money Flow | 핵심 변화 | 오늘 액션 |
|---|---|---|---|---|---|---|
| CRDO | 강화 | No Alert | 위/상승 | AI 네트워킹 잔류 | FY2026 Q4 매출 4.37억달러, 다음 분기 4.70억달러 가이던스 확인 | Hold, 추격 금지 |
| RKLB | 강화 | Yellow Alert | 아래/회복 대기 | 우주 대표주 선택 유입 | 2026-06-22 Nasdaq-100 편입 예정, backlog 확대 | `thesis OK, timing wait` |
| Harmony Drive | 유지 | No Alert | 위/우상향 추정 | 로봇 자동화 유지 | 밤사이 Thesis를 꺾는 새 악재 없음 | Hold |
| Yaskawa | 유지 | No Alert | 위/둔화 | 로봇 자동화 유지 | 로봇 자금 흐름 유지, 새 기업별 촉매는 제한적 | Hold |
| TSM | 유지 | No Alert | 위/둔화 | AI 반도체 병목 잔류 | AI 수요 부족 지속 발언, CoWoS 우위 유지 | Hold |
| ETN | 유지 | No Alert | 위/둔화 | 전력/그리드 잔류 | 데이터센터 전력 병목과 전력 인프라 투자 논리 유지 | Hold |
| PLTR / GOOGL | 유지 | No Alert | 근접 | 플랫폼/소프트웨어 잔류 | 밤사이 Thesis를 바꿀 신규 악재 없음 | Hold |
| NVTS | 주의 | Yellow Alert | 아래/회복 대기 | 전력반도체 관심 유지 | 전력반도체 Thesis는 유효하지만 금리 민감도가 부담 | `thesis OK, timing wait` |
| NVDA / AVGO | 주의 | Yellow Alert | 아래/회복 대기 | AI 메가캡 잔류 | 수요는 유효하지만 Fed 이후 멀티플 압축 부담 | `thesis OK, timing wait` |
| RMBS | 주의 | Yellow Alert | 아래/회복 대기 | 메모리 병목 관심 유지 | 사업 Thesis는 유지되지만 가격 확증이 부족 | `thesis OK, timing wait` |
| RGTI / IONQ | 주의 | Yellow Alert | 아래/변동성 큼 | 양자 투기성 유입 | 테마는 살아 있으나 변동성이 Thesis를 압도 | Watch |
| QQQM / VOO / SPYM / SPYG / SCHD / SGOV | 유지 | No Alert | 지수 기준 유지 | 자산배분 유지 | 개별 종목 Thesis보다 배분 역할이 우선 | Hold |
| PL / SATL | 약화 | Red Alert | 아래/하락 | 우주 소형주 유출 | 우주 자금은 대표주 RKLB로 쏠림, 현금흐름 부담 | Trim 검토 |
| AGNC / CONY | 약화 | Red Alert | 아래/둔화 | 금리 민감 구조물 유출 | 금리 상승이 NAV/분배 지속성 리스크로 연결 | Trim/Sell 검토 |
| DXYZ / XOVR | 약화 | Red Alert | 아래/불안정 | 비상장 노출 약화 | NAV 대비 프리미엄/유동성 리스크가 더 큼 | Trim/Watch |
| RXT | 약화 | Red Alert | 아래/약세 | 턴어라운드 자금 유입 제한 | 본업 회복 Thesis를 확정할 새 데이터 부족 | 축소 우선 |

## 3. Watch List

| 종목 | 테마 | Watch 이유 | 트리거 | 실패 조건 |
|---|---|---|---|---|
| LITE | AI 광통신 | CRDO 외 병목 확장 후보 | 20일선 지지 후 재가속 | 20일선 재이탈 |
| CIEN | AI 네트워킹 | 외부 광네트워크 수혜 후보 | 실적 갭 회복 + 거래량 | 갭 저항 재실패 |
| NVT | 전력/냉각 | 데이터센터 전력 병목의 직접 수혜 | 20일선 또는 21EMA 반등 확인 | 50일선 이탈 지속 |
| ASTS | 우주 통신 | 우주 테마 내 비대칭 후보 | 운영·상용화 확인 + 20일선 회복 | 일정 지연, 추가 희석 |
| QBTS | 양자 | 돈은 들어오지만 과열 리스크 큼 | 급등 뒤 수렴, 20일선 재정렬 | 희석, 20일선 회복 실패 |

## 4. 20-Day Moving Average Review

> 정확한 20일선 숫자는 이번 런에서 전 종목 독립 전수 검증을 하지 못했습니다. 아래 평가는 2026-06-17 종가, 프리마켓 기사, 최근 차트 상태를 기준으로 `위/근접/아래`만 판정했습니다.

| 구간 | 종목 | 해석 |
|---|---|---|
| 위 | CRDO, Harmony Drive, Yaskawa, TSM, ETN, 주요 지수 ETF | 보유 논리가 유지되는 자리다. |
| 근접 | PLTR, GOOGL | 사업 Thesis는 무난하지만 공격적 추가매수 타점은 아니다. |
| 아래, Thesis 유효 | RKLB, NVTS, NVDA, AVGO, RMBS, RGTI, IONQ | 사업 논리는 살아 있으나 타이밍은 기다려야 한다. |
| 아래, 구조 경고 | PL, SATL, AGNC, CONY, DXYZ, XOVR, RXT | 20일선보다 Thesis 자체를 더 엄격히 봐야 한다. |

## 5. Red Alert / Yellow Alert / No Alert

| 경보 단계 | 종목 | 이유 | 대응 |
|---|---|---|---|
| Red Alert | PL, SATL, AGNC, CONY, DXYZ, XOVR, RXT | 현금흐름, 구조, 프리미엄, 금리 민감도, 추세 약화가 겹친다 | 반등 시 축소 또는 제외 검토 |
| Yellow Alert | RKLB, NVTS, NVDA, AVGO, RMBS, RGTI, IONQ | Thesis는 괜찮지만 Timing이 약하다 | `thesis OK, timing wait` |
| No Alert | CRDO, Harmony Drive, Yaskawa, TSM, ETN, PLTR, GOOGL, QQQM, VOO, SPYM, SPYG, SCHD, SGOV | 사업 Thesis와 자리 훼손이 상대적으로 적다 | 핵심 보유 유지 |

## 6. 오늘의 우선순위

| 우선순위 | 종목/그룹 | 판단 | 이유 |
|---:|---|---|---|
| 1 | CRDO | 핵심 보유 | Money Flow, Thesis, Timing이 가장 잘 정렬된 편이다. |
| 2 | TSM / ETN | 핵심 보유 | 금리 역풍 속에서도 구조적 병목 지위가 유지된다. |
| 3 | RKLB / NVTS / RMBS | 관찰 강화 | Thesis는 살아 있으나 오늘은 `thesis OK, timing wait` 구간이다. |
| 4 | Harmony Drive / Yaskawa | 보유 유지 | 로봇 흐름은 유지되지만 새 수주/양산 확인 전 추격 금지다. |
| 5 | PL / SATL / AGNC / CONY / DXYZ / XOVR / RXT | 축소 후보 점검 | 사업보다 구조와 자금 흐름이 더 나쁘다. |

## 7. 한 줄 결론

오늘 09:00 기준의 핵심은 `좋은 Thesis와 좋은 Timing을 분리하는 것`이다. CRDO, TSM, ETN, 로봇 핵심주는 보유 우위이고, RKLB·NVTS·NVDA·AVGO·RMBS는 `thesis OK, timing wait`, PL·SATL·AGNC·CONY·DXYZ·XOVR·RXT는 경고 우선이다.

## 8. 확인한 근거 링크

- [AP: 2026-06-17 미국장 지수 마감](https://apnews.com/article/c5c1c0551c4fae25ef2c6bda73638e70)
- [WSJ: 2026-06-17 Fed 이후 주가와 금리 반응](https://www.wsj.com/finance/stocks/global-stocks-markets-dow-update-06-17-2026-05228bac)
- [WSJ: 2026-06-18 미국 지수선물 반등과 유가 하락](https://www.wsj.com/finance/stocks/treasurys-stock-futures-rebound-on-u-s-iran-agreement-fed-reaction-512ef8ce)
- [MarketWatch: 2026-06-17 10년물 4.469%](https://www.marketwatch.com/livecoverage/stock-market-today-s-p-500-nasdaq-dow-federal-reserve-meeting-interest-rate-decision-14-point-plan/card/treasury-yields-move-sharply-higher-after-fed-signals-at-least-one-rate-hike-this-year-ZE31shFvSRcRm9m0NmVt)
- [WSJ: 2026-06-18 달러 강세 지속과 아시아 통화 부담](https://www.wsj.com/finance/currencies/asian-currencies-consolidate-may-be-weighed-by-fed-rate-hike-expectations-50220365)
- [Barron's: RKLB 2026-06-22 Nasdaq-100 편입](https://www.barrons.com/articles/rocket-lab-stock-joining-nasdaq-058ed32f)
- [MarketWatch: Rocket Lab backlog와 성장 해석](https://www.marketwatch.com/story/rocket-labs-stock-rises-upon-new-signs-its-business-is-expanding-rapidly-dc7abdfc)
- [IBD: Credo FY2026 Q4 실적과 가이던스](https://www.investors.com/news/technology/credo-stock-crdo-fiscal-q4-2026-earnings/)
- [Tom's Hardware: TSMC의 AI 수요·CoWoS 우위 코멘트](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-says-panel-packaging-wont-replace-cowos-anytime-soon-for-the-largest-future-ai-processors-wafer-level-tech-can-scale-to-58-massive-dies-in-one-package)
- [Business Insider: 미국 데이터센터 전력 수요 확대](https://www.businessinsider.com/us-ai-data-center-power-electricity-use-consumption-2026-6)
