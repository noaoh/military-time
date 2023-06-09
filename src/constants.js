const MILITARY_TIMEZONES = {
  'A': { codename: 'Alpha', offset: 1, localTimezone: 'Etc/GMT+1' },
  'B': { codename: 'Bravo', offset: 2, localTimezone: 'Etc/GMT+2' },
  'C': { codename: 'Charlie', offset: 3, localTimezone: 'Etc/GMT+3' },
  'D': { codename: 'Delta', offset: 4, localTimezone: 'Etc/GMT+4' },
  'E': { codename: 'Echo', offset: 5, localTimezone: 'Etc/GMT+5' },
  'F': { codename: 'Foxtrot', offset: 6, localTimezone: 'Etc/GMT+6' },
  'G': { codename: 'Golf', offset: 7, localTimezone: 'Etc/GMT+7' },
  'H': { codename: 'Hotel', offset: 8, localTimezone: 'Etc/GMT+8' },
  'I': { codename: 'India', offset: 9, localTimezone: 'Etc/GMT+9' },
  'K': { codename: 'Kilo', offset: 10, localTimezone: 'Etc/GMT+10' },
  'L': { codename: 'Lima', offset: 11, localTimezone: 'Etc/GMT+11' },
  'M': { codename: 'Mike', offset: 12, localTimezone: 'Etc/GMT+12' },
  'N': { codename: 'November', offset: -1, localTimezone: 'Etc/GMT-1' },
  'O': { codename: 'Oscar', offset: -2, localTimezone: 'Etc/GMT-2' },
  'P': { codename: 'Papa', offset: -3, localTimezone: 'Etc/GMT-3' },
  'Q': { codename: 'Quebec', offset: -4, localTimezone: 'Etc/GMT-4' },
  'R': { codename: 'Romeo', offset: -5, localTimezone: 'Etc/GMT-5' },
  'S': { codename: 'Sierra', offset: -6, localTimezone: 'Etc/GMT-6' },
  'T': { codename: 'Tango', offset: -7, localTimezone: 'Etc/GMT-7' },
  'U': { codename: 'Uniform', offset: -8, localTimezone: 'Etc/GMT-8' },
  'V': { codename: 'Victor', offset: -9, localTimezone: 'Etc/GMT-9' },
  'W': { codename: 'Whiskey', offset: -10, localTimezone: 'Etc/GMT-10' },
  'X': { codename: 'X-ray', offset: -11, localTimezone: 'Etc/GMT-11' },
  'Y': { codename: 'Yankee', offset: -12, localTimezone: 'Etc/GMT-12' },
  'Z': { codename: 'Zulu', offset: 0, localTimezone: 'Etc/GMT' },
};

const MILITARY_INDEX_MAPPING = {
  0: 'Z',
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'K',
  11: 'L',
  12: 'M',
  13: 'N',
  14: 'O',
  15: 'P',
  16: 'Q',
  17: 'R',
  18: 'S',
  19: 'T',
  20: 'U',
  21: 'V',
  22: 'W',
  23: 'X',
  24: 'Y',
};

const MILITARY_TIME_FORMAT = 'HH:mm:ss';

export { MILITARY_TIMEZONES, MILITARY_TIME_FORMAT, MILITARY_INDEX_MAPPING };
