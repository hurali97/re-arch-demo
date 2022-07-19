//
//  Dlog.mm
//  ReArchDemo
//
//  Created by Hur Ali on 14/07/2022.
//

#import "RCTDlog.h"

@implementation RCTDlog

RCT_EXPORT_MODULE(Dlog);

- (void)log:(NSString *)message {
  NSLog(@"%@",message);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeDlogSpecJSI>(params);
}

@end
